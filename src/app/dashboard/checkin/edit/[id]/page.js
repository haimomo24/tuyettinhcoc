import EditCheckin from "@/app/component/dashboard/checkin/EditCheckin";


// Server Component
export default async function Page({ params }) {
  // ✅ unwrap params
  const { id } = await params;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chỉnh sửa Checkin ID: {id}</h1>
      <EditCheckin id={id} />
    </div>
  );
}
