// THIS MAPS SERVICE AND CATEGORY DATA TOGETHER SUCH THAT WE CAN HANDLE IT IN THE TABLES
import type { Service, ServiceCategory } from "@prisma/client";

// type for the remapped table
type TableServiceInfo = Record<string, Service[]>;

// combine service and cateogry in one type
type ServiceWithCategory = Service & { category: ServiceCategory };

export function servicesMapper(services: ServiceWithCategory[]) {
  return services.reduce(
    (acc: TableServiceInfo, service) => {
      if (!acc[service.category.name]) {
        acc[service.category.name] = [];
      }
      acc[service.category.name].push({
        ...service,
      });
      return acc;
    },
    {
      "New Client": [],
      "Haircut": [],
      "Hair Color": [],
      "Hair Add-on": [],
      "Nails": [],
    } as TableServiceInfo,
  );
}
