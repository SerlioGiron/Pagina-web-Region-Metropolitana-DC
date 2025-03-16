'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function ViewPDF  ({ pdfUrl })  {

    return (
        <div className="pdf-viewer-container">
            <iframe
                src={pdfUrl}
                title="PDF Viewer"
                className="pdf-frame"
                width="100%"
                height="600px"
                style={{ border: "none" }}
            />
        </div>
    );
};

ViewPDF.propTypes = {
    pdfUrl: PropTypes.string.isRequired
};