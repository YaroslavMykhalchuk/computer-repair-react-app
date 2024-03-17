import React from 'react';
import './RenderJson.scss';

const RenderJson = ({ json }) => {
    const renderObject = (object) => {
    const entries = Object.entries(object);
    return (
        <span>
            {'{'}
            {entries.map(([key, value], index) => (
                <div key={key} className="json-entry">
                <span className="json-key">"{key}"</span>: {renderValue(value)}
                {index < entries.length - 1 ? ',' : ''}
                </div>
            ))}
            {'}'}
        </span>
    );
    };

    const renderArray = (array) => {
    return (
        <span>
            [
                {array.map((item, index) => (
                    <div key={index} className="json-entry">
                    {renderValue(item)}
                    {index < array.length - 1 ? ',' : ''}
                    </div>
                ))}
            ]
        </span>
    );
    };

    const renderValue = (value) => {
        if (Array.isArray(value)) return renderArray(value);
        if (value && typeof value === 'object') return renderObject(value);
        if (typeof value === 'string') return <span className="json-string">"{value}"</span>;
        return <span className="json-value">{String(value)}</span>;
    };

    return (
        <pre className="json-display">
            {renderObject(json)}
        </pre>
    );
};

export default RenderJson;
