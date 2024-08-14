function Hello() {
  let myName = "Pranshu";
  let age = 24
  let fullName = () => {
    return 'Pranshu Singh Bisht'
  }
  return <p>
    Dynamics: My name is {myName}, My full name is {fullName()} age: {age}</p>
}

export default Hello;
