import { Outlet } from '@umijs/max';
export default function () {
  return (
    <div>
      <div>this is A</div>
      <Outlet />
    </div>
  );
}
