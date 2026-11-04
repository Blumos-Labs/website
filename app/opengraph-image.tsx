import { ImageResponse } from 'next/og';

export const alt = 'Blumos Labs: BMS software and BMS IoT for EV batteries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 80, color: '#fff', background: 'linear-gradient(135deg, #004AAD 0%, #2D7AFD 100%)',
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, opacity: 0.85 }}>BLUMOS LABS</div>
        <div style={{ marginTop: 28, fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
          BMS software and BMS IoT for EV batteries
        </div>
        <div style={{ marginTop: 30, fontSize: 32, opacity: 0.9 }}>JBD · JK · Daly BMS app · Blu-400 telematics</div>
      </div>
    ),
    size,
  );
}
