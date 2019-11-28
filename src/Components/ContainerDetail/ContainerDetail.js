import React from "react";

const ContainerDetail = props => {
  const {
    desc,
    title,
    author,
    status,
    genre,
    pages,
    isbn,
    vendor,
    weight,
    height,
    length,
    published,
  } = props;

  const color =
    status === "Available" ? " light-green-text text-accent-4" : "red-text";

  return (
    <div className="left detail-container">
      <h5 className={`right ${color} text-status`}>{status}</h5>
      <button
        className="btn z-depth-0 purple darken-3"
        style={{ borderRadius: "10px" }}>
        {genre}
      </button>
      <h4>{title}</h4>
      <span style={{ fontWeight: "bold" }}>{author}</span>
      <p
        style={{
          marginTop: "20px",
        }}
        dangerouslySetInnerHTML={{ __html: desc }}>
        {/* {desc} */}
      </p>
      <h5>Details:</h5>

      <table className="responsive-table striped">
        <tbody>
          <tr>
            <td style={{ fontWeight: "bold" }}>Published</td>
            <td>{published}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Pages</td>
            <td>{pages}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>ISBN</td>
            <td>{isbn}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Publisher</td>
            <td>{vendor}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Weight</td>
            <td>{weight} Kg</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Height</td>
            <td>{height} Cm</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Length</td>
            <td>{length} Cm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContainerDetail;
