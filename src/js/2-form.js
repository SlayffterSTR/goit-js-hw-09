
const form = document.querySelector('.feedback-form')
console.log(form)



form.addEventListener('input', () => {
    const formData = new FormData(form);
    const name = formData.get('email');
    const message = formData.get('message');
    const data = { name, message}
    saveToLS('email', name);
    saveToLS('message', message);
    saveToLS('userData', data);
    
})

function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }
  
  function loadFromLS(key) {
    const json = localStorage.getItem(key);
    try {
      const data = JSON.parse(json);
      return data;
    } catch {
      return json;
    }
  }
  
