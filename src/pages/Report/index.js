import React, {useState,useRef} from 'react';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'
import './styles.scss'
import Input, { Gender, Option2, Option3, DateTaker, MultiInput } from '../../components/Input'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { ReportActionTypes } from '../../stores/reports/types';
import { useAuthContext } from '../../auth/Auth';

export default function Report({createRequestSuccess}) {
  const { currentUser } = useAuthContext();
   const [selectedDate, setSelectedDate] = useState(new Date());
   const dispatch = useDispatch();

  
  const handleDateChange = (date,value) => {
    setSelectedDate(date._d);
    formData.current.arrivalDate = date._d
  };

  const formData = useRef({
    city: '',
    age: '',
    gender: 'male',
    isFeverish: '',
    feverLevel: '',
    isCoughing: '',
    coughType:'',
    runnyNose:'',
    soreThroat: '',
    hasSymptoms: '',
    hasHeartDisease:'',
    specialConditions:'',
    cancerous: '',
    recentTravel:'',
    arrivalDate:'',
    foreignContacts:''
  })

  const getBooleanEqual = (string) => {
    let val = string.toLowerCase();
    return val === 'no'? false : val === 'yes' ? true : 'undefined';
  }

  const handleNameChange = (evt)=>{
    formData.current.name = evt.target.value
  };

  const handleAgeChange = (evt)=>{
    formData.current.age = Number(evt.target.value).toFixed()
  }

  const handleGenderChange = (gender)=>{
    formData.current.gender = gender ? gender:'male';
  }

  const handleFeverChange = (evt)=>{
    formData.current.isFeverish = getBooleanEqual(evt.target.value)
  }

  const handleFeverTypeChange = (evt)=>{
    formData.current.feverLevel = evt.target.value.toLowerCase()
  }

  const handleCoughChange = (evt)=>{
    formData.current.isCoughing = getBooleanEqual(evt.target.value)
  }

  const handleCoughTypeChange = (evt)=>{
    formData.current.coughType = evt.target.value.toLowerCase()
  }


  const handleRunnyNoseChange = (evt)=>{
    formData.current.runnyNose = getBooleanEqual(evt.target.value);
  }

  const handleSoreThroatChange = (evt)=>{
    formData.current.soreThroat = getBooleanEqual(evt.target.value)
  }

  const handleSymptomsChange = (evt) => {
    formData.current.hasSymptoms = evt.target.value
  }

  const handleHeartDiseaseChange = (evt)=>{
    formData.current.hasHeartDisease = getBooleanEqual(evt.target.value)
  }

  const handleCancerChange = (evt)=>{
    formData.current.cancerous = getBooleanEqual(evt.target.value)
  }

  const handleTravelChange = (evt)=>{
    formData.current.recentTravel = getBooleanEqual(evt.target.value)
  }

  const handleContactChange = (evt)=>{
    formData.current.foreignContacts = getBooleanEqual(evt.target.value)
  }

  const handleCityChange = (evt)=>{
    formData.current.city = evt.target.value
  }

  const handleSpecialConditionsChange = (evt)=>{
    formData.current.specialConditions = evt.target.value
  }


  
  const handleReportSubmit = (evt)=>{
    evt.preventDefault();
    console.log(formData);
        
    dispatch({
      type: ReportActionTypes.CREATE_REPORT_BY_CITY_REQUEST,
      payload: {
        report: formData.current
      }
    })
  }
    
  if (!currentUser) {
    return <Redirect to="/" />;
  }
    
    return (
      <div className="report">
        <div className="max-width">
        <h1> You can only report your personal case </h1>
        <form>
          <h3> Enter Bio-data </h3>
          <section className="e__bio__data"> 
          <Input 
          type="text"
          placeholder="Name"
          label="What is your fullname?"
          value=""
          handleChange = {handleNameChange}
          />
           <Input 
          type="number"
          placeholder="Age"
          label="How old are you?"
          value=""
          handleChange = {handleAgeChange}
          />

          <Input 
          type="text"
          placeholder="Ibadan"
          label="What state are you currently located?"
          value=""
          handleChange = {handleCityChange}
          />
          <Gender 
          label="What is your gender?"
          value1="male"
          value1Text="Male"
          value2="female"
          value2Text="Female"
          handleChange = {handleGenderChange}
          /> 
          </section>
          <h3 style={{ marginTop: '20px' }}> Symptoms </h3>
          <div className="que">
          <section> 
         <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Do you have a fever?"
         handleChange = {handleFeverChange}
         />
          </section>
          <section>  
          <Option3
          handleChange = {handleFeverTypeChange}
         label="High"
         value="high"
         label_2="Low"
         value_2="low"
         label_3="Intermittent"
         value_3="intermittent"
         label_4="none"
         value_4="none"
         text="How would you grade your fever – High, Low or Intermittent? "
         />
          </section>
          <section>
          <Option2
          handleChange = {handleCoughChange} 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Do you have cough? "
         />
          </section>

           <section>
          <Option2 
         label="Sputum"
         value="sputum"
         label_2="Dry"
         value_2="dry"
         label_3="none"
         value_3="none"
         handleChange = {handleCoughTypeChange}
         text="Is the cough productive of sputum or dry? "
         />
          </section>

           <section>
          <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Do you have difficulty/fast breathing? "
         />
          </section>

           <section>
          <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         handleChange = {handleRunnyNoseChange}
         text="Do you have a runny nose? "
         />
          </section>

           <section>
          <Option2
          handleChange = {handleSoreThroatChange} 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Do you have a sore throat? "
         />
          </section>
          <MultiInput 
          label="Describe your symptons"
          placeholder="How you have been feeling for the past few days"
          handleChange={handleSymptomsChange}
          />
          <h3 style={{ marginTop: '20px' }}> Background Medical Conditions </h3>
           <section>
          <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         handleChange = {handleHeartDiseaseChange}
         text="Do you have any heart disease you’re being treated for? "
         />
          </section>

           <section>
          <Option3
         label="Diabetic"
         value="diabetic"
         label_2="Hypertensive"
         value_2="hypertensive"
         label_3="Asthmatic"
         value_3="asthmatic"
         label_4="None"
         value_4="none"
         handleChange = {handleSpecialConditionsChange}
         text="Are you diabetic/hypertensive/asthmatic? "
         />
          </section>

           <section>
          <Option2
        handleChange = {handleCancerChange} 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Have you been diagnosed with any form of cancer? "
         />
          </section>
          <h3 style={{ marginTop: '20px' }}> Social and Travel History </h3>
           <section>
          <Option2
          handleChange = {handleTravelChange} 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Have you been outside the country within the last one month?"
         />
          </section>

           {/* <section id="date__picker">
          <DateTaker
          label="When did you arrive back in Nigeria? "
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          />
          </section>

           <section>
          <Option2
          handleChange = {handleContactChange} 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Have you been in contact with anyone who recently returned from outside the country? "
         />
          </section> */}

           <section>
            <Button 
            variant="contained" 
            color="secondary"
            type="submit"
            onClick = {handleReportSubmit}
            > 
              SUBMIT
            </Button>
           </section>
          </div>
        </form>
        </div>
      </div>
    );
}
