type TestIntroInfoCardProps = {
  title: string;
  value: string;
};

export const TestIntroInfoCard = (p: TestIntroInfoCardProps) => {
  const { title, value } = p;

  return (
    <div className="rounded-md bg-blue-300/30 px-8 py-2 w-48">
      <p className=" text-sm text-gray-600">{title}</p>
      <p className=" font-medium">{value}</p>
    </div>
  );
};
