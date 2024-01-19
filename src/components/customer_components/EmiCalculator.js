// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';

// const EmiCalculator = () => {
//   const { control, handleSubmit, formState } = useForm();
//   const { errors } = formState;
  
//   const onSubmit = (data) => {
//     const { principal, interestRate, tenure } = data;
//     const p = parseFloat(principal);
//     const r = parseFloat(interestRate) / 1200;
//     const n = parseFloat(tenure);

//     const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
//     alert(`EMI: ${emiValue.toFixed(2)} RS`);
//   };

//   return (
//     <body>
//     <div className='Loan_calcualtor'>
      
//       <h2 className='text-center text-secondary fst-italic text-decoration-underline'>EMI Calculator</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>
//           Principal Amount:
//           <Controller
//             control={control}
//             name="principal"
//             render={({ field }) => <input {...field} type="number" />}
//           />
//         </label>
//         <br /><br/>
//         <label>
//           Interest Rate (% per annum):
//           <Controller
//             control={control}
//             name="interestRate"
//             render={({ field }) => <input {...field} type="number" />}
//           />
//         </label>
//         <br /><br/>
//         <label>
//           Loan Tenure (months):
//           <Controller
//             control={control}
//             name="tenure"
//             render={({ field }) => <input {...field} type="number" />}
//           />
//         </label>
//         <br /><br/>
//         <button type="submit">Calculate EMI</button><br></br><br></br>
//         <button type="submit">Pay EMI</button>
//         <br/><br/>
        
//       </form>
//       {errors.principal && <p>Principal amount is required</p>}
//       {errors.interestRate && <p>Interest rate is required</p>}
//       {errors.tenure && <p>Loan tenure is required</p>}
//     </div>
//     </body>
//   );
// };

// export default EmiCalculator;


// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';

// const EmiCalculator = () => {
//   const { control, handleSubmit, setValue, formState } = useForm();
//   const { errors } = formState;

//   const onSubmit = (data) => {
//     const { principal, interestRate, tenure, emiPayment } = data;
//     const p = parseFloat(principal);
//     const r = parseFloat(interestRate) / 1200;
//     const n = parseFloat(tenure);

//     let remainingPrincipal = p;
//     let totalPayment = 0;

//     for (let i = 1; i <= n; i++) {
//       const interest = remainingPrincipal * r;
//       const principalPayment = parseFloat(emiPayment) - interest;
//       remainingPrincipal -= principalPayment;

//       if (remainingPrincipal < 0) {
//         remainingPrincipal = 0;
//       }

//       totalPayment += parseFloat(emiPayment);

//       if (remainingPrincipal === 0) {
//         break;
//       }
//     }

//     alert(`Total Payment: ${totalPayment.toFixed(2)} USD\nRemaining Balance: ${remainingPrincipal.toFixed(2)} USD`);
//   };

//   return (
//     <div className='Loan_calcualtor'>
//       <h2>EMI Calculator</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>
//           Principal Amount:
//           <Controller
//             control={control}
//             name="principal"
//             render={({ field }) => <input {...field} type="number" />}
//           />
//         </label>
//         <br />
//         <label>
//           Interest Rate (% per annum):
//           <Controller
//             control={control}
//             name="interestRate"
//             render={({ field }) => <input {...field} type="number" />}
//           />
//         </label>
//         <br />
//         <label>
//           Loan Tenure (months):
//           <Controller
//             control={control}
//             name="tenure"
//             render={({ field }) => <input {...field} type="number" />}
//           />
//         </label>
//         <br />
//         <label>
//           EMI Payment:
//           <Controller
//             control={control}
//             name="emiPayment"
//             render={({ field }) => <input {...field} type="number" />}
//           />
//         </label>
//         <br />
//         <button type="submit">Pay EMI</button>
//       </form>
//       {errors.principal && <p>Principal amount is required</p>}
//       {errors.interestRate && <p>Interest rate is required</p>}
//       {errors.tenure && <p>Loan tenure is required</p>}
//       {errors.emiPayment && <p>EMI payment amount is required</p>}
//     </div>
//   );
// };

// export default EmiCalculator;

import React, { useState } from 'react';

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [emiPayment, setEmiPayment] = useState('');

  const calculateEmi = () => {
    // Calculate EMI using the provided formula
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 1200;
    const n = parseFloat(tenure);

    if (p && r && n) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi(null);
    }
  };

  const handleEmiPayment = () => {
    const remainingPrincipal = parseFloat(principal) - parseFloat(emiPayment);
    setPrincipal(remainingPrincipal.toFixed(2));
  };

  return (
    <div  className='Loan_calcualtor'>
      <h2>EMI Payment</h2>
      <label>
        Principal Amount:
        <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
      </label>
      <br />
      <label>
        Interest Rate (% per annum):
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </label>
      <br />
      <label>
        Loan Tenure (months):
        <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateEmi}>Calculate EMI</button>
      {emi !== null && (
        <div>
          <h3>EMI: {emi} Rs</h3>
          <label>
            EMI Payment:
            <input type="number" value={emiPayment} onChange={(e) => setEmiPayment(e.target.value)} />
          </label>
          <br />
          <button onClick={handleEmiPayment}>Pay EMI</button>
          <h4>Remaining Principal: {principal} RS</h4>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;

