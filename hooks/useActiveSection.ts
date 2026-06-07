import { useState, useEffect } from 'react';
t function useActiveSection(sectionIds: string[]) {
  const [actiY + 150;

      fortiveSection(sectionIds[i]);
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
