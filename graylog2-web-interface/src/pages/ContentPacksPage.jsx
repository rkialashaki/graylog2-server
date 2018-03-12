import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Spinner from 'components/common/Spinner';

import Routes from 'routing/Routes';

import { DocumentTitle, PageHeader } from 'components/common';
import ContentPacksList from 'components/content-packs/ContentPacksList';

class ContentPacksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentPacks: undefined,
    };
  }

  componentDidMount() {
    this._loadContentPacks();
  }

  _loadContentPacks() {
    const contentPacks = [
      { id: '1', title: 'UFW Grok Patterns', summary: 'Grok Patterns to extract informations from UFW logfiles', version: '1.0', states: ['installed', 'edited'] },
      { id: '2', title: 'Rails Log Patterns', summary: 'Patterns to retreive rails production logs', version: '2.1', states: [] },
      { id: '3', title: 'Backup Content Pack', summary: '', version: '3.0', states: ['installed'] },
      { id: '4', title: 'SSH Archive', summary: 'A crypted backup over ssh.', version: '3.4', states: ['error'] },
      { id: '5', title: 'FTP Backup', summary: 'Fast but insecure backup', version: '1.0', states: ['installed', 'updatable'] },
      { id: '6', title: 'UFW Grok Patterns', summary: 'Grok Patterns to extract informations from UFW logfiles', version: '1.0', states: ['installed', 'edited'] },
      { id: '7', title: 'Rails Log Patterns', summary: 'Patterns to retreive rails production logs', version: '2.1', states: [] },
      { id: '8', title: 'Backup Content Pack', summary: '', version: '3.0', states: ['installed'] },
      { id: '9', title: 'SSH Archive', summary: 'A crypted backup over ssh.', version: '3.4', states: ['error'] },
      { id: '10', title: 'FTP Backup', summary: 'Fast but insecure backup', version: '1.0', states: ['installed', 'updatable'] },
      { id: '11', title: 'UFW Grok Patterns', summary: 'Grok Patterns to extract informations from UFW logfiles', version: '1.0', states: ['installed', 'edited'] },
      { id: '12', title: 'Rails Log Patterns', summary: 'Patterns to retreive rails production logs', version: '2.1', states: [] },
      { id: '13', title: 'Backup Content Pack', summary: '', version: '3.0', states: ['installed'] },
      { id: '14', title: 'SSH Archive', summary: 'A crypted backup over ssh.', version: '3.4', states: ['error'] },
      { id: '15', title: 'FTP Backup', summary: 'Fast but insecure backup', version: '1.0', states: ['installed', 'updatable'] },
    ];
    this.setState({ contentPacks: contentPacks });
  }

  render() {
    if (!this.state.contentPacks) {
      return (<Spinner />);
    }

    return (
      <DocumentTitle title="Content packs">
        <span>
          <PageHeader title="Content packs">
            <span>
              Content packs accelerate the set up process for a specific data source. A content pack can include inputs/extractors, streams, and dashboards.
            </span>

            <span>
              Find more content packs in {' '}
              <a href="https://marketplace.graylog.org/" target="_blank">the Graylog Marketplace</a>.
            </span>

            <div>
              <Button bsStyle="info" bsSize="large">Upload</Button>&nbsp;
              <LinkContainer to={Routes.SYSTEM.CONTENTPACKS.EXPORT}>
                <Button bsStyle="success" bsSize="large">Create a content pack</Button>
              </LinkContainer>
            </div>
          </PageHeader>

          <Row className="content">
            <Col md={12}>

              <div id="react-configuration-bundles">
                <ContentPacksList
                  contentPacks={this.state.contentPacks}
                />
              </div>
            </Col>
          </Row>
        </span>
      </DocumentTitle>
    );
  }
}

export default ContentPacksPage;
