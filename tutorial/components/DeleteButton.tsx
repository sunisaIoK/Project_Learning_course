import { deleteUser, removeUser } from "@/utils/actions";

function DeleteButton({ id }: { id: string }) {
    const removeUserWithId = removeUser.bind(null, id)
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="id" value={id} className="" />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs p-2 rounded"
      >
        delete
      </button>
    </form>
  );
}
export default DeleteButton;
