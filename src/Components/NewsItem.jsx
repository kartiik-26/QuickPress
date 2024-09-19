// const NewsItem = ({ title, description, src, url }) => {
//   if (!title || !description || !src || !url) {
//     return null;
//   }
//   return (
//     <div
//       className="card text-light bg-dark mx-auto my-4"
//       style={{
//         maxWidth: "800px", // Responsive width
//         borderRadius: "10px",
//         padding: "20px",
//         boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.15)", // Shadow only on bottom and right
//       }}
//     >
//       <img
//         src={src}
//         className="card-img-top"
//         alt="news-thumbnail"
//         style={{
//           height: "250px", // Image height for consistency
//           objectFit: "cover",
//           borderTopLeftRadius: "10px",
//           borderTopRightRadius: "10px",
//         }}
//       />
//       <div className="card-body">
//         <h5 className="card-title" style={{ fontSize: "1.5rem" }}>
//           {title.slice(0, 100)}
//         </h5>
//         <p className="card-text" style={{ fontSize: "1.2rem" }}>
//           {description
//             ? description.slice(0, 180)
//             : "Discover more about this story by clicking here for the full details. Stay informed with the latest updates!"}
//         </p>
//         <a href={url} className="btn btn-primary btn-block">
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;





const NewsItem = ({ title, description, src, url }) => {
  if (!title || !src || !url) {
    return null; // or return an empty fragment <></> if you prefer
  }

  return (
    <div
      className="card mb-3 news-card mx-auto"
      style={{
        margin: '1.5rem', // Margin around the card
        backgroundColor: '#ffffff', // White background color
        color: '#000000', // Black text color
        border: '1px solid #dddddd', // Light border color
        borderRadius: '0.25rem', // Rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
        maxWidth: '800px', // Maximum width for the card
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={src}
            className="img-fluid rounded-start"
            alt="news"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%', // Ensure image covers its container
              borderTopLeftRadius: '0.25rem', // Rounded top-left corners
              borderBottomLeftRadius: '0.25rem', // Rounded bottom-left corners
            }}
          />
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-between">
          <div
            className="card-body"
            style={{ padding: '1rem', backgroundColor: '#f8f9fa', color: '#000000' }} // Background color for body and text
          >
            <h5
              className="card-title"
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }} // Title size
            >
              {title}
            </h5>
            <p
              className="card-text"
              style={{ fontSize: '1.1rem' }} // Increased description text size
            >
              {description
                ? description
                : "Discover more about this story by clicking here for the full details. Stay informed with the latest updates!"}
            </p>
          </div>
          <div
            className="card-footer text-end"
            style={{
              padding: '0.75rem',
              backgroundColor: '#f8f9fa', // Same background color as card body
              borderTop: 'none', // Remove separation line above the button
            }}
          >
            <a
              href={url}
              className="btn btn-primary"
              style={{
                backgroundColor: '#007bff', // Button color
                borderColor: '#007bff',
                fontSize: '1rem', // Button text size
                padding: '0.5rem 1rem', // Button padding
                color: '#ffffff', // Button text color
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;










