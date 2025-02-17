
const LeftBox = () => {
  return (
    <div className="col-md-6 left-box d-flex justify-content-center align-items-center">
      <div className="row left-row d-flex justify-content-center align-items-center">
        <div className="featured-image m-2" style={{ width: '250px' }}>
          <img className="img" src="assets/img/logo.png" alt="Logo" style={{ width: '300px',position: 'relative',
    right: '26px' }} />
        </div>
        <div className="icons d-none d-md-block sticky-image">
          <img src="assets/img/Frame.png" alt="" style={{ width: '300px', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default LeftBox; 