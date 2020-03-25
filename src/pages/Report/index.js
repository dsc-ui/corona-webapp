import React, { useState } from 'react';
import './styles.scss'
import Input, { Gender, Option2, Option3, DateTaker } from '../../components/Input'
import Button from '@material-ui/core/Button'

export default function Report() {
  const [ age, setAge ] = useState('');
   const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };
    return (
      <div className="report">
        <div className="max-width">
        <h1> You can only report your personal case </h1>
        <form>
          <h3> Enter Bio-data </h3>
          <section className="e__bio__data"> 
          <Input 
          type="text"
          placeholder="Age"
          label="What is your age?"
          value={age}
          />
          <Gender 
          label="What is your gender?"
          value1="male"
          value1Text="Male"
          value2="female"
          value2Text="Female"
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
         />
          </section>
          <section>  
          <Option3 
         label="High"
         value="high"
         label_2="Low"
         value_2="low"
         label_3="Intermittent"
         value_3="intermittent"
         text="How would you grade your fever – High, Low or Intermittent? "
         />
          </section>
          <section>
          <Option2 
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
         text="Do you have a runny nose? "
         />
          </section>

           <section>
          <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Do you have a sore throat? "
         />
          </section>
          <h3 style={{ marginTop: '20px' }}> Background Medical Conditions </h3>
           <section>
          <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
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
         text="Are you diabetic/hypertensive/asthmatic? "
         />
          </section>

           <section>
          <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Have you been diagnosed with any forms of cancer? "
         />
          </section>
          <h3 style={{ marginTop: '20px' }}> Social and Travel History </h3>
           <section>
          <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Have you had any recent travel from outside the country? "
         />
          </section>

           <section id="date__picker">
          <DateTaker
          label="When did you arrive back in Nigeria? "
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          />
          </section>

           <section>
          <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Have you been in contact with anyone who recently returned from outside the country? "
         />
          </section>

           <section>
            <Button 
            variant="contained" 
            color="secondary"
            type="submit"
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
