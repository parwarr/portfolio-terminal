export const Switch = (props: { test: boolean; children: React.ReactNode }) => {
  const { test, children } = props;

  if (test) {
    return children;
  }

  return null;
};
