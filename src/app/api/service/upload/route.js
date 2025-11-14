import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const POST = async (req) => {
  try {
    const uploadDir = path.join(process.cwd(), "public/uploads/service");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const formData = await req.formData();
    const files = formData.getAll("files"); 

    const uploadedFiles = [];

    for (const file of files) {
      const fileData = Buffer.from(await file.arrayBuffer());
      const filename = Date.now() + "_" + file.name;
      const filepath = path.join(uploadDir, filename);
      fs.writeFileSync(filepath, fileData);
      uploadedFiles.push("/uploads/service/" + filename);
    }

    return NextResponse.json({ files: uploadedFiles });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
