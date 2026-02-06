import { Badge } from "@/components/ui/badge";

interface BeforeAfterVideosProps {
  preRepairSrc: string;
  postRepairSrc: string;
  preRepairCaption?: string;
  postRepairCaption?: string;
  deviceName: string;
}

export const BeforeAfterVideos = ({
  preRepairSrc,
  postRepairSrc,
  preRepairCaption = "Damaged device as received",
  postRepairCaption = "Fully restored and tested",
  deviceName,
}: BeforeAfterVideosProps) => {
  return (
    <section id="results" className="bg-muted/40 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <Badge variant="secondary" className="mb-3">
            Real Repairs
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            See the Difference
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Real {deviceName} repairs from our Winnipeg shop — no stock photos, no filters.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Before */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full object-cover"
                aria-label={`${deviceName} before repair`}
              >
                <source src={preRepairSrc} type="video/mp4" />
              </video>
              <Badge className="absolute left-3 top-3 bg-destructive text-destructive-foreground">
                Before
              </Badge>
            </div>
            <p className="px-4 py-3 text-center text-sm text-muted-foreground">
              {preRepairCaption}
            </p>
          </div>

          {/* After */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full object-cover"
                aria-label={`${deviceName} after repair`}
              >
                <source src={postRepairSrc} type="video/mp4" />
              </video>
              <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
                After
              </Badge>
            </div>
            <p className="px-4 py-3 text-center text-sm text-muted-foreground">
              {postRepairCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
