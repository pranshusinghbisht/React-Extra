function Random() {

  let number = Math.random() * 100;
  return <h1 style={{ 'background-color': 'blue' }}>
    Random number is : {number}
  </h1>
}

export default Random;
