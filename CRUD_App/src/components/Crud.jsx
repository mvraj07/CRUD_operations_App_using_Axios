export default function Crud() {
  return (
    <form method="get">
      <div className="container center-h">
        <input type="text" id="title" />
        <input type="text" id="post" />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
