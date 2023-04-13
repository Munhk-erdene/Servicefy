const PostMap = ({ value }) => {
  return (
    <div>
      <div>{value && value.name}</div>
      <div>{value && value.date}</div>
    </div>
  );
};
export default PostMap;
