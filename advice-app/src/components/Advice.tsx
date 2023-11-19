interface AdviceProps {
  advice: string | undefined;
  id: number | undefined;
}
function Advice({ id, advice }: AdviceProps) {
  return (
    <>
      <h4 className="mb-4 text-sm tracking-widest text-neon">Advice #{id}</h4>
      <p className="mb-6 text-primary font-extrabold leading-snug text-cyan">
        {advice}
      </p>
    </>
  );
}

export default Advice;
