import { Outlet } from '@/.umi/exports';

export default function () {
  return (
    <div>
      <div>this is B</div>
      <Outlet />
    </div>
  );
}
