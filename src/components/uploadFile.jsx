

const UploadFile = () => {

  function changeHandler(){

  }
  function handleSubmission(){

  }

    return(
      <div>
			  <input id='fileUpload' type="file" name="file" onChange={changeHandler} hidden/>
        <label for='fileUpload' className="button-6">Choose File</label>
				<button className="button-6" onClick={handleSubmission}>Submit</button>
      </div>
    );
};

export default UploadFile;