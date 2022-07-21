const generateRegNo = () =>{
    const r = (x) => (Math.random() * x) + ' ';
    const l = () => [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"][r(26)];

    return r(10) + r(10) + r(10) + "-" + l() + l() + l();
}

export default generateRegNo;