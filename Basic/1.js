function display(){
    const today = new Date();
    // today.getDay() will return the day of the week (0 for Sunday, 1 for Monday, etc.)
    const days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[today.getDay()];

    let hours=today.getHours();
    const minutes=today.getMinutes();
    const seconds=today.getSeconds();

    const ampm= hours >=12 ? 'PM' : 'AM';
    hours = hours%12;
    hours = hours ? hours : 12;

    console.log(`Today is : ${dayName}`);
    console.log(`current time is : ${hours} : ${minutes} min : ${seconds} sec ${ampm}`);

}
display();