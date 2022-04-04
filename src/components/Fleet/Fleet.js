import React from 'react';
import { MDBDropdown, 
        MDBDropdownMenu,
        MDBDropdownToggle,
        MDBDropdownItem,
        MDBDropdownLink
     } from 'mdb-react-ui-kit';

     import './mdb.css'
export default function Flee() {
    return (
        <>
            {/* <MDBDropdown>
                <MDBDropdownToggle>Choose Fleet</MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem>
                        <MDBDropdown dropright group>
                            <MDBDropdownToggle>Fleet1</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownLink>Test</MDBDropdownLink>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown> */}

<MDBDropdown dropright group>
        <MDBDropdownToggle>Dropright</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            <MDBDropdownLink href="#"><MDBDropdownToggle>Fleet1</MDBDropdownToggle>
            <MDBDropdownMenu></MDBDropdownMenu>
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Another action</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <hr className='dropdown-divider' />
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Separated link</MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
        
        
        </>
        // <div>
        //     <label>Choose Fleet</label>
        //     <select id='fleet-filter'>
        //     <option value="">--All--</option>
        //     <option value="1">Fleet 1</option>
        //     <option value="2">Fleet 2</option>
        //     </select>
        // </div>
    )
}