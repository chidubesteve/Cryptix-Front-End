import { useEffect } from 'react';

const useCloseOnOutsideClick = (refs, setStateFunctions) => {
  useEffect(() => {
    const closeOpenMenus = (e) => {
      let isOutside = true;

      for (let i = 0; i < refs.length; i++) {
        if (refs[i].current && refs[i].current.contains(e.target)) {
          isOutside = false;
          break;
        }
      }

      if (isOutside) {
        setStateFunctions.forEach((setState) => {
          setState(false);
        });
      }
    };
    document.addEventListener('click', closeOpenMenus);
    return () => {
      document.removeEventListener('click', closeOpenMenus);
    };
  }, [refs, setStateFunctions]);
};

export default useCloseOnOutsideClick;
