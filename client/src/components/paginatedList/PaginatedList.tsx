import { Card, Flex, FloatButton, Input, Pagination, Select } from "antd";
import { type JSX, useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
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
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
  });
  const [search, setSearch] = useState<string>();
  const contentRef = useRef(null);

  useEffect(() => {
    const params: IFetchAllReq = {
      ...sort,
      page: pagination.page - 1,
      search,
    };
    dataFetch(params).then((res) => setData(res));
  }, [dataFetch, sort, pagination, search]);

  const onSearchChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setPagination({ ...pagination, page: 1 });
    setSearch(e.target.value);
  }, 500);

  const onPageChange = (page: number) => {
    setPagination({ ...pagination, page });
  };

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
              {
                value: "createdAt",
                label: "По дате",
              },
            ]}
            onChange={(val) => setSort({ ...sort, field: val })}
          />
          <Pagination
            current={pagination.page}
            total={data?.totalElements}
            onChange={onPageChange}
          />
          <Input
            className="paginated-list__search"
            placeholder="Поиск"
            onChange={onSearchChange}
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
