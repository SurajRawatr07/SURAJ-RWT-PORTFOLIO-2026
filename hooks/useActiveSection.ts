import { useState, useEffect } from 'react';
t function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffet scrollPosition = window.scrollY + 150;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
