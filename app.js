const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
let count = 0;


btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
            countColor(count)
        } 
        else if (styles.contains('increase')) {
            count++;
            countColor(count)
        }
        else {
            count = 0;    
            countColor(count)   
        }
        value.textContent = count;
    })
})

const countColor = (number) => {
    if (number > 0) {
        value.style.color = 'green'
    }
    if (number < 0) {
        value.style.color = 'red'
    }
    if (number === 0) {
        value.style.color = 'hsl(209, 61%, 16%)'
    }
} 

