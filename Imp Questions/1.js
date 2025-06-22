const obj ={
    title:"Puff the Magic Dragon",
    duration:30,
    stars:[ "Puff", "Jackie", "Living Sneezes"],
}

const {title, duration, stars} = obj;
console.log(`${title} lasts for ${duration} minutes and stars ${stars.join(", ")}`);