async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    let refreshButton = document.querySelector('refresh-button');
    
    let data = await fetch("http://localhost:9001/counter");
    let response = await data.json();
    console.log(response);
    let countValue = response.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }
     
    function refreshButtonClick() {
        countContainer.textContent = response.value;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    refreshButton.addEventListener('click', refreshButtonClick);
    countContainer.textContent = countValue;
    
}
main();