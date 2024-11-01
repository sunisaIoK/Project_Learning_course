const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // const toggleAlert = () => {
  //   if (showAlert){
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };
  return (
    <div> 
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        toggle 
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

export default ToggleChallenge;
