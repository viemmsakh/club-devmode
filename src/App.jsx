import React, { useEffect, useState } from 'react';
import Container from './Components/Container';
import Project from './Components/Project';
import './Common.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProjects = async () => {
    try {
      const response = await fetch('./projects.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        data.sort((a, b) => a.title.localeCompare(b.title));
      }
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <>
      <Container
        size="lg"
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          maxWidth: '1500px',
        }}
      >
        {/* Main Container */}
        <Container
          size="md"
          style={{
            padding: '1rem',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <img src='./no.png' alt='No Bugs Bunny Meme' style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }} />
          <img src='./devmode.jpeg' alt='Dev Mode Cease and Desist' style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }} />
        </Container>
        {/* Sidebar */}
        <Container
          size="xs"
          style={{
            backgroundColor: 'var(--color-secondary)',
            padding: '1rem',
            borderRadius: '8px',
            color: 'var(--color-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5em',
          }}
        >
          <h1 style={{ borderBottom: '1px solid', borderColor: 'var(--color-primary)' }}>Club &quot;Dev Mode&quot;</h1>
          {loading && <p>Loading...</p>}
          {!loading && projects.length === 0 && <p>No projects found.</p>}
          {!loading && projects.length > 0 && (
            <>
              {projects.map((project, index) => (
                <Project {...project} key={index} />
              ))}
            </>
          )}
        </Container>
        {/* Footer */}
        <Container
          size="lg"
          style={{
            backgroundColor: 'var(--color-secondary)',
            padding: '1rem',
            borderRadius: '8px',
            color: 'var(--color-primary)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-between',
          }}
        >
          <i>
            To add project to sidebar, please contact me at{' '}
            <a href='mailto:contact@devmode.club' target='_blank' alt='Email' style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>contact@devmode.club</a>
          </i>
          <div><a href='https://github.com/viemmsakh/club-devmode' target='_blank' alt='GitHub Source' style={{ color: 'var(--color-primary)' }}>Page Source</a> </div>
        </Container>
      </Container>
    </>
  );
}

export default App;
