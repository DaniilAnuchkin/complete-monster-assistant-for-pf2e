import { Card, Flex, FloatButton, Input, Select } from "antd";
import { type JSX, useEffect, useRef, useState } from "react";
import "./paginatedList.scss";
import {
  IPaginatedObj,
  IFetchAllReq,
  ESortOrder,
  ISort,
  IPagination,
} from "@sharedTypes/index";

function PaginatedList<GData>({
  dataFetch,
  dataSlot,
}: {
  dataFetch: (params: IFetchAllReq) => Promise<IPaginatedObj<GData>>;
  dataSlot: (res: GData) => JSX.Element;
}) {
  const [data, setData] = useState<IPaginatedObj<GData>>();
  const [sort, setSort] = useState<ISort>({
    field: "name",
    order: ESortOrder.ASC,
  });
  const [pagination] = useState<IPagination>({
    page: 0,
  });
  const [search, setSearch] = useState<string>();
  const contentRef = useRef(null);

  useEffect(() => {
    const params: IFetchAllReq = {
      ...sort,
      ...pagination,
      search,
    };
    dataFetch(params).then((res) => setData(res));
  }, [dataFetch, sort, pagination, search]);

  return (
    <Card
      className="paginated-list"
      title={
        <div className="paginated-list__header">
          <Select
            className="paginated-list__sort"
            value={sort.field}
            placeholder="Сортировка"
            options={[
              {
                value: "name",
                label: "По имени",
              },
              {
                value: "level",
                label: "По уровню",
              },
            ]}
            onChange={(val) => setSort({ ...sort, field: val })}
          />
          <Input
            className="paginated-list__search"
            value={search}
            placeholder="Поиск"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      }
    >
      <div ref={contentRef} className="paginated-list__body">
        <FloatButton.BackTop
          target={() => contentRef.current || document.body}
          type="primary"
        />
        <Flex
          className="paginated-list__content"
          justify="center"
          align="center"
          wrap
        >
          {data?.content.map((item) => {
            return dataSlot(item);
          })}
        </Flex>
      </div>
    </Card>
  );
}

export default PaginatedList;
