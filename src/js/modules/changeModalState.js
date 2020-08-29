import checkNumInputs from './checkNumInputs'

let changeModalState = (state) => {
  let windowShape = document.querySelectorAll('.balcon-icons__img'),
      windowWidth = document.querySelectorAll('#width'),
      windowHeight = document.querySelectorAll('#height'),
      windowType = document.querySelectorAll('#view_type'),
      windowProfile = document.querySelectorAll('.checkbox');

      checkNumInputs('#width');
      checkNumInputs('#height');

      // let actionOnElems = (event, elem, prop) => {
      //   elem.forEach((item, index) => {
      //     item.addEventListener(event, () => {
      //       if (elem.length > 1) {
      //         state[prop] = index;
      //         console.log(state);
      //       } else {
      //         state[prop] = item.value;
      //         console.log(state);
      //       }
      //     });
      //   });
      // };

      let actionOnElems = (event, elem, prop) => {
        elem.forEach((item, index) => {
          item.addEventListener(event, () => {
            switch(item.nodeName) {
              case 'SPAN':
                state[prop] = index;
                break;
              case 'INPUT': 
                if(item.getAttribute('type') === 'checkbox') {
                  index === 0 ? state[prop] = "Холодное" : state[prop] = "Тёплое";
                  elem.forEach((el, j) => {
                    el.checked = false;
                    if(index === j) {
                      el.checked = true;
                    }
                  });
                } else {
                  state[prop] = item.value;
                }
                break;
              case 'SELECT':
                state[prop] = item.value;
                break; 
            }
            // console.log(state);
          });
        });
      };

      actionOnElems('click', windowShape, 'shape');
      actionOnElems('input', windowWidth, 'width');
      actionOnElems('input', windowHeight, 'height');
      actionOnElems('change', windowType, 'type');
      actionOnElems('change', windowProfile, 'profile');

      // windowForm.forEach((item, index) => {
      //   item.addEventListener('click', () => {
      //     state.form = index;
      //     console.log(state);
      //   });
      // });
};

export default changeModalState;