import { Weight } from "lucide-react";

const testimonials = [
  {
    quote: 'His sessions are highly engaging and practical he explains complex ideas in a simple way and keeps the audience involved throughout the session our team left feeling motivated and ready to take action.',
    name: 'Govardhan',
    role: 'corporate Training Manager',
    initials: 'GK ******',
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnWH2gwfatjfLd8GPpPXyOdHEOD6kydjq-VEH_duvEvaKzfFzTPjYt3M&s=10',
  },
  {
    quote: 'Attending his talks was a great experience his communication style is powerful relatable and inspiring i gained valuable insights that i coud immediately apply to my professional life.',
    name: 'Pavan',
    role: 'Business Professional',
    initials: 'PG ****',
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbZ8sdkczWutf7HbGMfg6SVXlGsoUKqV8eB8eatGy2x4rmPMHR_rpWuSF&s=10',
  },
  {
    quote: 'We invited him as the keynote spekaer for our event and the respnse from the audience was excellent his energy story telling and ability to connect with people made the session memorable.',
    name: 'Fathima',
    role: 'HR Manager',
    initials: 'FS ***** ',
    photo:'https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920',
  },
  {
    quote: 'An inspiring with excellent stage presence his session encouraged our employees to think differently stay motivated and focus on continuous improvement.',
    name: 'Rakhi',
    role: 'Event Organizer',
    initials: 'RN **** ',
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvYIlXjbf4bcE6S9OG8mUi8ayta_LM4deoTHd2R7Gccoy4d8hgDxjvf0&s=10',
  },
  {
    quote: 'One of the most inspiring sessions i have attended the message was clear practical and motivating i would difinitely recommend him for professional events and conferences.',
    name: 'Chaithnya',
    role: 'Conference Attendee',
    initials: 'C *****',
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBbbCJPvfviGXu8CUwWFzJECOcHm-vEpKUL3HRV3Ngg&s',
  },
  {
    quote: ' His speech gave me a fresh perspective on leadership and personal growth the way he shared real-life experience made the session meaningful and easy to connect with.',
    name: 'Pankaj',
    role: 'Audience Member',
    initials: 'p ****',
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67RlPSZKLUbtY_sQs8Mz6b05Ewujx-6rjK6VDVIeL6DkfsDdrdJacNM8&s=10',
  },

];

export default function Testimonials() {
  return (
    <div className="page">
      <div className="container">
        <p className="eyebrow">Feedback</p>
        <h2 style={{ marginTop: 8 }}>Testimonials</h2>
        <p style={{ marginTop: 10, maxWidth: 480 }}>
          What Clients & Audiences say.
        </p>

        <div className="testimonials-row" style={{
            marginTop: 40,
            display: 'grid',
            gap: 20,
            
          }}
        >
            <div className="tesimonials-grid">
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: 'lightblue',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor:" #17212b",
                color:"white",
              }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--ink)', lineHeight: 1.5 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 24 }}>
                <img 
                src={t.photo}
                alt={t.name}
                style={{
                  width:154,
                  height:154,
                  borderRadius:'50%',
                  objectFit:'cover',
                  flexShrink:0,
                  
                  
                }}
                />
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    fontWeight: 600,

                  }}
                >
                    <br>
                    </br>
                    <br></br>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 26, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 25, color: 'var(--muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}




