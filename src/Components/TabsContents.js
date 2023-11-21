import "./TabsContents.css";
export const TabsContents = ({ contents, contentTitle }) => {
  return (
    <div className="contents-wrapper">
      <h2 className="content-title">{contentTitle}</h2>
      <p>{contents}</p>
    </div>
  );
};
