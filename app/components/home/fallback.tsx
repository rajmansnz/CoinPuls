import React from 'react'
import DataTable from '../DataTable';

export const CoinOverviewFallback = () => {
    return (
        <div id="coin-overview-fallback">
            <div className="header">
                <div className="header-image skeleton" />
                <div className="info">
                    <div className="header-line-sm skeleton" />
                    <div className="header-line-lg skeleton" />
                </div>
            </div>
        </div>
    );
};

export const TrendingCoinsFallback = () => {
    const skeletonData = Array.from({ length: 6 }, (_, i) => ({
        id: `skeleton-${i}`,
    }));

    const columns: DataTableColumn<{ id: string }>[] = [
        {
            header: 'Name',
            cellClassName: 'name-cell',
            cell: () => (
                <div className="name-link">
                    <div className="name-image skeleton" />
                    <div className="name-line skeleton" />
                </div>
            ),
        },
        {
            header: '24h Change',
            cellClassName: 'change-cell',
            cell: () => (
                <div className="price-change">
                    <div className="change-icon skeleton" />
                    <div className="change-line skeleton" />
                </div>
            ),
        },
        {
            header: 'Price',
            cellClassName: 'price-cell',
            cell: () => <div className="price-line skeleton" />,
        },
    ];

    return (
        <div id="trending-coins-fallback">
            <p>Trending Coins</p>
            <div className="trending-coins-table">
                <DataTable
                    data={skeletonData}
                    columns={columns}
                    rowKey={(item) => item.id}
                    tableClassName="trending-coins-table"
                    headerCellClassName="py-3!"
                    bodyCellClassName="py-2!"
                />
            </div>
        </div>
    );
};

export const CategoriesFallback = () => {
    const skeletonData = Array.from({ length: 10 }, (_, i) => ({
        id: `skeleton-${i}`,
    }));

    const columns: DataTableColumn<{ id: string }>[] = [
        {
            header: 'Category',
            cellClassName: 'Category-cell',
            cell: () => <div className="name-line skeleton" />,
        },
    ];

    return (
        <div id="categories" className="custom-scrollbar">
            <h4>Top Categories</h4>
            <DataTable
                columns={columns}
                data={skeletonData}
                rowKey={(item) => item.id}
                tableClassName="mt-3"
            />
        </div>
    );
};