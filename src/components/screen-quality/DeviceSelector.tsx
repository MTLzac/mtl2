import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEVICE_BRANDS, DeviceModel } from "@/lib/screen-quality-data";

interface DeviceSelectorProps {
  selectedBrand: string;
  selectedModel: string;
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
}

export function DeviceSelector({
  selectedBrand,
  selectedModel,
  onBrandChange,
  onModelChange,
}: DeviceSelectorProps) {
  const selectedBrandData = DEVICE_BRANDS.find((b) => b.name === selectedBrand);
  const models = selectedBrandData?.models || [];

  const handleBrandChange = (brand: string) => {
    onBrandChange(brand);
    onModelChange(""); // Reset model when brand changes
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
      <div className="w-full sm:w-64">
        <Select value={selectedBrand} onValueChange={handleBrandChange}>
          <SelectTrigger className="w-full h-12 text-base">
            <SelectValue placeholder="Select Brand" />
          </SelectTrigger>
          <SelectContent>
            {DEVICE_BRANDS.map((brand) => (
              <SelectItem key={brand.name} value={brand.name}>
                {brand.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full sm:w-64">
        <Select
          value={selectedModel}
          onValueChange={onModelChange}
          disabled={!selectedBrand}
        >
          <SelectTrigger className="w-full h-12 text-base">
            <SelectValue placeholder={selectedBrand ? "Select Model" : "Select brand first"} />
          </SelectTrigger>
          <SelectContent>
            {models.map((model: DeviceModel) => (
              <SelectItem key={model.name} value={model.name}>
                {model.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
