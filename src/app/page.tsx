import dynamic from 'next/dynamic';

const Dictaphone = dynamic(() => import('../components/Dictaphone'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Dictaphone />
    </div>
  );
}
