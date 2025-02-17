 const VowelCard = ({ letter, word, image, sound }) => {
    return (
        <div className="col-4 d-flex justify-content-center">
        <div className="card p-4 text-center shadow-lg" style={{ width: "120px", height: "120px", backgroundColor: "#ADD8E6" }}>
          <h2 className="text-white" style={{ fontSize: "2rem" }}>{letter}</h2>
          <img src={image} alt={word} style={{ width: "40px", height: "40px" }} />
          <audio controls>
            <source src={sound} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    )
  }
  
  export default VowelCard