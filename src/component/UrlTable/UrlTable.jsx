/* eslint-disable react/prop-types */
// const UrlTable = ({ shortUrl, origUrl, clicks }) => {
const UrlTable = ({ urlData }) => {
  return (
    <>
      <div className="container">
        <table className="table">
          <thead className="fw-bolder">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Short Url</th>
              <th scope="col">Original Url</th>
              <th scope="col">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urlData.map((url, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <a href={`${url.shortUrl}`}>{url.shortUrl}</a>
                </td>
                <td className="">
                  <a href={`${url.origUrl}`}>{url.origUrl}</a>
                </td>
                <td>{url.clicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UrlTable;
