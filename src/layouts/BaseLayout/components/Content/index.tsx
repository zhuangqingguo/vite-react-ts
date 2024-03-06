export default function Content() {
  return (
    <ALayout.Content className="relative h-[calc(100vh-154px)] overflow-y-scroll p-2 sm:p-4">
      <Suspense
        fallback={
          <ASpin
            size="large"
            className="content_spin"
          />
        }
      >
        <Outlet />
      </Suspense>
    </ALayout.Content>
  )
}
