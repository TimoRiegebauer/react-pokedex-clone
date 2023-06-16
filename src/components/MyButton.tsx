const MyButton = ({
  label,
  onclick
}: {
  label: string;
  onclick: any;
}) => {
  return (
    <button
      className="bg-sky-600 px-12 py-4 rounded-md text-white duration-300 hover:bg-sky-800"
      onClick={onclick}
    >
      {label}
    </button>
  );
}

export default MyButton;