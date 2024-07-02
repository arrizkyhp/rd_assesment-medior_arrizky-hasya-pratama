import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useNewsletter from '@/views/Albums/Newsletter/Newsletter.hooks';

const NewsletterView = () => {
  const { email, handleJoin, setEmail } = useNewsletter();

  return (
    <section
      className="relative flex flex-col items-center justify-center bg-inRainbows-red py-8"
      id="follow"
    >
      <div className="absolute inset-0 bg-radiohead-2 bg-cover bg-center opacity-50 pointer-events-none" />
      <div className="flex items-center gap-10 z-10">
        <h1 className=" text-white font-archivo-black">Join Our Newsletter</h1>
        <div className="flex gap-2">
          <Input
            className="rounded-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="bg-inRainbows-blue rounded-none"
            onClick={handleJoin}
          >
            Join
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterView;
