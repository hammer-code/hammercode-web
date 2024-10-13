import { Fragment } from "react";
import { useTranslations } from "next-intl";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LINK } from "@/components/common/navbar/constant";

const BreadCrumbLink = () => {
  const t = useTranslations("Layout");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {LINK.map(({ href, id }, index) => (
          <Fragment key={id}>
            <BreadcrumbItem>
              <BreadcrumbLink href={`${href}`}>{t(`breadcrumb.link-${id}`)}</BreadcrumbLink>
            </BreadcrumbItem>
            {index < LINK.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbLink;
