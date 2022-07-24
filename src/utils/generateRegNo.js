const generateRegNo = () =>{
    const r = (x) => Math.floor(Math.random() * 10);
    const l = () => [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"][r(26)];

    return r(10) + r(10) + r(10) + "-" + l() + l() + l();
}

export default generateRegNo;