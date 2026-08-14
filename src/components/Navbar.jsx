import  React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
const links=[
    {to:'/',label:'Home'},
    { to: '/events', label: 'Events' },
    {to:'/services',label:'Services'},
    {to:'/testimonials',label:'Testimonials'},
    {to:'/contact',label:'Contact'},

     

];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'black',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        padding:'20px',
      }}
    >
      <div
        className="container"
        style={{
          height: 72,
          display: 'flex',
          alignItems: 'center',
          color:'white',
          justifyContent: 'space-between',
        }}
      >
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}
        >
          Professional Speaker
        </NavLink>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{  gap: 28 }}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={({ isActive }) => ({
                fontSize: 14,
                fontWeight: 500,
                color: isActive ? 'var(--accent)' : 'var(--ink-soft)',
                borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                paddingBottom: 4,
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="btn btn-primary nav-desktop"
          style={{ padding: '8px 18px' }}
        >
          Book a speker for  Event
        </NavLink>

        {/* Hamburger button (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            
            background: 'none',
            border: 'none',
            padding: 8,
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span className="hamburger-line" style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span className="hamburger-line" style={{ opacity: open ? 0 : 1 }} />
          <span className="hamburger-line" style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav
          className="nav-mobile"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            padding: '12px 20px 24px',
            borderTop: '1px solid var(--border)',
          }}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                fontSize: 15,
                fontWeight: 500,
                padding: '10px 4px',
                color: isActive ? 'var(--accent)' : 'var(--ink-soft)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: 8, textAlign: 'center' }}
          >
            Book a speaker for event 
          </NavLink>
        </nav>
      )}
    </header>
  );
}




